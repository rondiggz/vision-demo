import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";

import { MARKS } from "../data/marks";
import type { Mark } from "../data/marks";

interface MarksTreeProps {
  selectedMarkId: string | null;
  onSelectMark: (mark: Mark) => void;
}

export default function MarksTree({
  selectedMarkId,
  onSelectMark,
}: MarksTreeProps) {
  const maintenance = MARKS.filter((m) => m.category === "maintenance");
  const marketing = MARKS.filter((m) => m.category === "marketing");

  return (
    <Box sx={{ width: 300, p: 2, bgcolor: "#0f172a", color: "white" }}>
      <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1, color: "#f59e0b" }}>
        Maintenance
      </Typography>

      <List dense>
        {maintenance.map((mark) => (
          <ListItemButton
            key={mark.id}
            onClick={() => onSelectMark(mark)}
            selected={selectedMarkId === mark.id}
            sx={{
              borderRadius: 1,
              mb: 0.5,
              "&.Mui-selected": { background: "#1e293b" },
              "&:hover": { background: "#334155" },
            }}
          >
            <ListItemText primary={mark.name} />
          </ListItemButton>
        ))}
      </List>

      <Divider sx={{ my: 2, borderColor: "#334155" }} />

      <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1, color: "#3b82f6" }}>
        Marketing
      </Typography>

      <List dense>
        {marketing.map((mark) => (
          <ListItemButton
            key={mark.id}
            onClick={() => onSelectMark(mark)}
            selected={selectedMarkId === mark.id}
            sx={{
              borderRadius: 1,
              mb: 0.5,
              "&.Mui-selected": { background: "#1e293b" },
              "&:hover": { background: "#334155" },
            }}
          >
            <ListItemText primary={mark.name} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}
