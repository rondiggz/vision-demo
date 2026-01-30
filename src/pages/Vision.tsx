console.log("VISION LOADED");

import React, { useCallback, useRef, useState } from "react";
import { Box } from "@mui/material";
import MarksTree from "../components/MarksTree";
import MediaDrawer from "../components/MediaDrawer";
import { MARKS, type Mark } from "../data/marks";

const Vision: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const modelSid = "BGfbBBXhrZf";

  const [selectedMark, setSelectedMark] = useState<Mark | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [initialUrl] = useState(
    `https://my.matterport.com/show/?m=${modelSid}&play=1&qs=1&hl=0`
  );

  // Build Matterport URL from position/rotation data
  const buildMatterportUrl = useCallback(
    (
      position?: { x: number; y: number; z: number },
      rotation?: { x: number; y: number },
      sweepId?: string
    ) => {
      const baseUrl = `https://my.matterport.com/show/?m=${modelSid}`;
      const params = new URLSearchParams({
        play: "1",
        qs: "1",
        hl: "0",
      });

      if (rotation) {
        params.set("sr", `${rotation.x},${rotation.y}`);
      }

      if (position) {
        params.set("sp", `${position.x},${position.y},${position.z}`);
      }

      if (sweepId) {
        params.set("ss", sweepId);
      }

      return `${baseUrl}&${params.toString()}`;
    },
    [modelSid]
  );

  const handleSelectMark = useCallback(
    (mark: Mark) => {
      console.log("MARK CLICKED:", mark.id);

      setSelectedMark(mark);
      setDrawerOpen(true);

      // Strategy: Use deeplink if available, otherwise build from position data
      if (mark.deeplink && iframeRef.current) {
        // Option C: Use stored deeplink (best option)
        console.log("Navigating using deeplink:", mark.deeplink);
        iframeRef.current.src = mark.deeplink;
      } else if (mark.position && iframeRef.current) {
        // Option A: Build URL from position/rotation data
        const url = buildMatterportUrl(mark.position, mark.rotation, mark.sweepId);
        console.log("Navigating using position data:", url);
        iframeRef.current.src = url;
      } else {
        console.warn("Mark has no navigation data (deeplink or position):", mark.id);
      }
    },
    [buildMatterportUrl]
  );

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        bgcolor: "#020617",
        color: "white",
      }}
    >
      <MarksTree
        selectedMarkId={selectedMark?.id || null}
        onSelectMark={handleSelectMark}
      />

      <Box sx={{ flexGrow: 1, position: "relative", bgcolor: "black" }}>
        <iframe
          ref={iframeRef}
          src={initialUrl}
          width="100%"
          height="100%"
          style={{ border: "none" }}
          allow="fullscreen; xr-spatial-tracking"
        />
      </Box>

      <MediaDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        selectedMark={selectedMark}
      />
    </Box>
  );
};

export default Vision;
