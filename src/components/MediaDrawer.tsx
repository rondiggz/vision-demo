import {
  Box,
  Drawer,
  Typography,
  Divider,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface MediaDrawerProps {
  open: boolean;
  onClose: () => void;
  selectedMark: any | null;
}

export default function MediaDrawer({
  open,
  onClose,
  selectedMark,
}: MediaDrawerProps) {
  if (!open || !selectedMark) return null;

  const photos = selectedMark?.content?.photos ?? [];
  const videos = selectedMark?.content?.videos ?? [];
  const documents = selectedMark?.content?.documents ?? [];

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: 420,
          p: 3,
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          {selectedMark.name}
        </Typography>

        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      {selectedMark.description && (
        <Box
          sx={{
            mb: 2,
            maxHeight: 140,
            overflowY: "auto",
            fontSize: "0.95rem",
            lineHeight: 1.45,
            color: "#444",
            border: "1px solid #ddd",
            borderRadius: 1,
            p: 1.5,
            background: "#fafafa",
          }}
        >
          {selectedMark.description}
        </Box>
      )}

      <Divider sx={{ my: 2 }} />

      {photos.length > 0 && (
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
            Photos
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {photos.map((src: string, i: number) => (
              <img
                key={i}
                src={src}
                alt=""
                style={{
                  width: "100%",
                  borderRadius: 6,
                  border: "1px solid #ddd",
                }}
              />
            ))}
          </Box>

          <Divider sx={{ mt: 2 }} />
        </Box>
      )}

      {videos.length > 0 && (
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
            Videos
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {videos.map((src: string, i: number) => (
              <video
                key={i}
                src={src}
                controls
                style={{
                  width: "100%",
                  borderRadius: 6,
                  border: "1px solid #ddd",
                }}
              />
            ))}
          </Box>

          <Divider sx={{ mt: 2 }} />
        </Box>
      )}

      {documents.length > 0 && (
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
            Documents
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {documents.map((src: string, i: number) => (
              <a
                key={i}
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#1976d2",
                  textDecoration: "none",
                  fontSize: "0.95rem",
                }}
              >
                {src.split("/").pop()}
              </a>
            ))}
          </Box>
        </Box>
      )}
    </Drawer>
  );
}
