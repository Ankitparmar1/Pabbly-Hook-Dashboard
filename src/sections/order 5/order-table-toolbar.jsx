import { useCallback } from 'react';

import Stack from '@mui/material/Stack';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
// import TextField from '@mui/material/TextField';
// import IconButton from '@mui/material/IconButton';
// import InputAdornment from '@mui/material/InputAdornment';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { formHelperTextClasses } from '@mui/material/FormHelperText';
import { Typography } from '@mui/material';

import { Iconify } from 'src/components/iconify';
import { usePopover, CustomPopover } from 'src/components/custom-popover';

// ----------------------------------------------------------------------

export function OrderTableToolbar({ filters, onResetPage }) {
  const popover = usePopover();

  const handleFilterName = useCallback(
    (event) => {
      onResetPage();
      filters.setState({ name: event.target.value });
    },
    [filters, onResetPage]
  );

  const handleFilterStartDate = useCallback(
    (newValue) => {
      onResetPage();
      filters.setState({ startDate: newValue });
    },
    [filters, onResetPage]
  );

  const handleFilterEndDate = useCallback(
    (newValue) => {
      onResetPage();
      filters.setState({ endDate: newValue });
    },
    [filters, onResetPage]
  );

  return (
    <>
      <Stack
        spacing={2}
        alignItems={{ xs: 'flex-end', md: 'center' }}
        direction={{ xs: 'column', md: 'row' }}
        sx={{ p: 2.5, pr: { xs: 2.5, md: 1 } }}
      >
        {/* <DatePicker
          label="Start date"
          value={filters.state.startDate}
          onChange={handleFilterStartDate}
          slotProps={{ textField: { fullWidth: true } }}
          sx={{ maxWidth: { md: 200 } }}
        />

        <DatePicker
          label="End date"
          value={filters.state.endDate}
          onChange={handleFilterEndDate}
          slotProps={{
            textField: {
              fullWidth: true,
              error: dateError,
              helperText: dateError ? 'End date must be later than start date' : null,
            },
          }}
          sx={{
            maxWidth: { md: 200 },
            [`& .${formHelperTextClasses.root}`]: {
              position: { md: 'absolute' },
              bottom: { md: -40 },
            },
          }}
        /> */}

        <Stack
          direction="row"
          justifyContent="space-between"
          spacing={1}
          flexGrow={1}
          sx={{ width: 1 }}
        >
          {/* <TextField
            fullWidth
            value={filters.state.name}
            onChange={handleFilterName}
            placeholder="Transformations"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled' }} />
                </InputAdornment>
              ),
            }}
          /> */}
          <Typography fontSize={18} fontWeight={700} lineHeight={2}>
            Requests
          </Typography>

          {/* <IconButton
            onClick={popover.onOpen}
            sx={{
              position: 'relative',
              '&:hover': {
                backgroundColor: 'transparent', // Ensures there's no background ellipse
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 2,
                  left: 0,
                  // m:'10px',
                  width: '100%',
                  height: '80%',
                  backgroundColor: '#919eab14', // Square background on hover
                  borderRadius: '5px', // Ensures the shape is square, not rounded
                  zIndex: -1, // Places the background behind the content
                },
              },
            }}
          >
            <Iconify icon="solar:filter-bold" sx={{ color: 'black' }} />
            <Typography sx={{ color: 'black', fontSize: '13px', ml: 1, fontWeight: '400px' }}>
              Filter
            </Typography>
          </IconButton> */}
        </Stack>
      </Stack>

      <CustomPopover
        open={popover.open}
        anchorEl={popover.anchorEl}
        onClose={popover.onClose}
        slotProps={{ arrow: { placement: 'right-top' } }}
      >
        <MenuList>
          <MenuItem
            onClick={() => {
              popover.onClose();
            }}
          >
            <Iconify icon="solar:printer-minimalistic-bold" />
            Print
          </MenuItem>

          <MenuItem
            onClick={() => {
              popover.onClose();
            }}
          >
            <Iconify icon="solar:import-bold" />
            Import
          </MenuItem>

          <MenuItem
            onClick={() => {
              popover.onClose();
            }}
          >
            <Iconify icon="solar:export-bold" />
            Export
          </MenuItem>
        </MenuList>
      </CustomPopover>
    </>
  );
}
