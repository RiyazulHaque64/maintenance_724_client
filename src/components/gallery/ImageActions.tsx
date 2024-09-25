import { Stack } from "@mui/material";
import DeleteAction from "./DeleteAction";
import EditAction from "./EditAction";

const ImageActions = ({ imageInfo }: { imageInfo: Record<string, any> }) => {
  return (
    <Stack direction="row" gap={1}>
      <EditAction data={imageInfo} />
      <DeleteAction id={imageInfo.id} />
    </Stack>
  );
};

export default ImageActions;
