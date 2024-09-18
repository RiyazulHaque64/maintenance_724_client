import AddService from "@/components/Service/AddService";
import ServiceTable from "@/components/Service/ServiceTable";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const ServicesPage = async () => {
  const res = await fetch("http://localhost:5001/api/service");
  const allServices = await res.json();

  return (
    <Box>
      {allServices ? (
        allServices.data?.length > 0 ? (
          <>
            {" "}
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ mb: "20px" }}
            >
              <AddService />
              <TextField
                size="small"
                placeholder="Search"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>
            <ServiceTable data={allServices} />
          </>
        ) : (
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ height: "calc(100vh - 110px)" }}
          >
            <AddService />
          </Stack>
        )
      ) : (
        <Box>
          <Typography color="error">Something went wrong!</Typography>
        </Box>
      )}
    </Box>
  );
};

export default ServicesPage;
