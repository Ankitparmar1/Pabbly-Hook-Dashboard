import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuList from '@mui/material/MenuList';
import Collapse from '@mui/material/Collapse';
import MenuItem from '@mui/material/MenuItem';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableCell from '@mui/material/TableCell';
import ListItemText from '@mui/material/ListItemText';
import { Grid, AppBar, Divider, Toolbar, TextField, Typography, IconButton } from '@mui/material';

import { useBoolean } from 'src/hooks/use-boolean';

import { Iconify } from 'src/components/iconify';
import { ConfirmDialog } from 'src/components/custom-dialog';
import { usePopover, CustomPopover } from 'src/components/custom-popover';


export function OrderTableRow({ row, selected, onViewRow, onSelectRow, onDeleteRow }) {
  const confirm = useBoolean();
  const collapse = useBoolean();
  const popover = usePopover();

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleOpenDrawer = () => {
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  const renderPrimary = (
    <TableRow hover selected={selected}>
      <TableCell padding="checkbox">
        <Checkbox
          checked={selected}
          onClick={onSelectRow}
          inputProps={{ id: `row-checkbox-${row.id}`, 'aria-label': `Row checkbox` }}
        />
      </TableCell>

      <TableCell>
        <Stack spacing={2} direction="row" alignItems="center">
          <Stack
            sx={{
              typography: 'body2',
              flex: '1 1 auto',
              alignItems: 'flex-start',
            }}
          >
            <Box component="span">transformations aditya</Box>
            <Box
              component="span"
              sx={{ color: 'text.disabled', fontSize: '12px', fontWeight: 400 }}
            >
              Aug 23, 2024 17:36:44.929
            </Box>
          </Stack>
        </Stack>
      </TableCell>

      <TableCell>
        <Stack spacing={2} direction="row" alignItems="center">
          <Stack
            sx={{
              typography: 'body2',
              flex: '1 1 auto',
              alignItems: 'flex-start',
            }}
          >
            <Box component="span">trs_66c87b54a2b7dc2c1740d639   <IconButton edge="end" sx={{ color: 'text.disabled' }}>
              <Iconify sx={{ mt: -0.2 }}
                width={14} icon="solar:copy-bold" />
            </IconButton></Box>
            <Box
              component="span"
              sx={{ color: 'text.disabled', fontSize: '12px', fontWeight: 400 }}
            />
          </Stack>
        </Stack>
      </TableCell>

      <TableCell align="right">
        <Box
          component="span"
          sx={{ color: 'success.main', cursor: 'pointer' }}
          onClick={handleOpenDrawer}
        >
          {'(request, context) =>'}
        </Box>
      </TableCell>

      <TableCell align="right" sx={{ px: 1, whiteSpace: 'nowrap' }}>
        {/* <Button variant="outlined" color="primary" size="small" sx={{ fontSize: '12px' }}>
          Access inbox
        </Button> */}
        {/* <IconButton
          color={collapse.value ? 'inherit' : 'default'}
          onClick={collapse.onToggle}
          sx={{ ...(collapse.value && { bgcolor: 'action.hover' }) }}
        >
          <Iconify icon="eva:arrow-ios-downward-fill" />
        </IconButton> */}

        {/* <IconButton color={popover.open ? 'inherit' : 'default'} onClick={popover.onOpen}>
          <Iconify icon="eva:more-vertical-fill" />
        </IconButton> */}
      </TableCell>

      {/* <TableCell align="center"> </TableCell> */}
    </TableRow>
  );

  const renderSecondary = (
    <TableRow>
      <TableCell sx={{ p: 0, border: 'none' }} colSpan={8}>
        {' '}
        {/* Adjust colSpan according to the number of columns in your table */}
        <Collapse
          in={collapse.value}
          timeout="auto"
          unmountOnExit
          sx={{ bgcolor: 'background.neutral', width: '100%' }}
        >
          <Paper sx={{ m: 1.5 }}>
            {row.items.map((item) => (
              <Stack
                key={item.id}
                direction="row"
                alignItems="center"
                sx={{
                  p: (theme) => theme.spacing(1.5, 2, 1.5, 1.5),
                  '&:not(:last-of-type)': {
                    borderBottom: (theme) => `solid 2px ${theme.vars.palette.background.neutral}`,
                  },
                }}
              >
                <ListItemText
                  primary="Verification Token:************"
                  secondary={item.sku}
                  primaryTypographyProps={{ typography: 'body2' }}
                  secondaryTypographyProps={{
                    component: 'span',
                    color: 'text.disabled',
                    mt: 0.5,
                  }}
                />
                {/* <div>x{item.quantity} </div> */}
                {/* <Box sx={{ width: 110, textAlign: 'right' }}>{fCurrency(item.price)}</Box> */}
              </Stack>
            ))}
          </Paper>
        </Collapse>
      </TableCell>
    </TableRow>
  );

  return (
    <>
      {renderPrimary}
      {renderSecondary}
      <CustomPopover
        open={popover.open}
        anchorEl={popover.anchorEl}
        onClose={popover.onClose}
        slotProps={{ arrow: { placement: 'right-top' } }}
      >
        <MenuList>
          <MenuItem
            onClick={() => {
              confirm.onTrue();
              popover.onClose();
            }}
            sx={{ color: 'error.main' }}
          >
            <Iconify icon="solar:trash-bin-trash-bold" />
            Delete
          </MenuItem>
          <MenuItem
            onClick={() => {
              onViewRow();
              popover.onClose();
            }}
          >
            <Iconify icon="solar:eye-bold" />
            View
          </MenuItem>
        </MenuList>
      </CustomPopover>
      <ConfirmDialog
        open={confirm.value}
        onClose={confirm.onFalse}
        title="Delete"
        content="Are you sure want to delete?"
        action={
          <Button variant="contained" color="error" onClick={onDeleteRow}>
            Delete
          </Button>
        }
      />
      <Drawer
        open={drawerOpen}
        onClose={handleCloseDrawer}
        anchor="right"
        slotProps={{ backdrop: { invisible: true } }}
        PaperProps={{ sx: { width: 850 } }}
      >
        {/* <Card component="ul" position="relative" float="left"> */}
        <AppBar
          sx={{ bgcolor: '#fff', padding: 2 }}
          position="relative"
          color="default"
          display="flex"
        >
          <Toolbar>
            <IconButton
              color="inherit"
              edge="start"
              sx={{
                position: 'absolute',
                top: 12, // Adjust top position as needed
                right: 28, // Adjust right position as needed
              }}
              onClick={handleCloseDrawer}
            >
              <Iconify icon="mingcute:close-line" />
            </IconButton>
            {/* You can uncomment this Button if you need a Save button */}
            {/* <Button autoFocus color="inherit" variant="contained" onClick={dialog.onFalse}>
            Save
          </Button> */}
          </Toolbar>
          <Typography
            sx={{
              mt: -8,
              flex: 1,
              ml: 2,
              color: 'primary',
              fontSize: '28px',
              fontWeight: 700,
            }}
          >
            transformation aditya
          </Typography>
          <Typography
            sx={{ flex: 1, ml: 2, color: 'text.disabled', fontSize: '16px', fontWeight: 400 }}
          >
            trs_66c87b54a2b7dc2c1740d639

            <IconButton edge="end" sx={{ color: 'text.disabled' }}>
              <Iconify sx={{ mt: -0.2 }}
                width={14} icon="solar:copy-bold" />
            </IconButton>
          </Typography>
        </AppBar>
        <Divider />
        <Box sx={{ width: '90%', mt: 2, ml: 5, bgcolor: '#fff', padding: 2 }}>
          <Typography variant="h6" gutterBottom>
            Transformation Details
          </Typography>
          <Divider />
          <Grid container spacing={2} mt={2}>
            <Grid item xs={100} sm={4} md={3} lg={2} xl={2}>
              <Typography variant="body2">Name</Typography>
            </Grid>
            <Grid item xs={12} sm={8} md={9} lg={10} xl={10}>
              <TextField
                disabled
                value="transformation aditya"
                fullWidth
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={2} xl={2}>
              <Typography variant="body2">Created At</Typography>
            </Grid>
            <Grid item xs={12} sm={8} md={9} lg={10} xl={10}>
              <TextField
                disabled
                value="2024-08-23T12:06:44.929Z"
                fullWidth
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={2} xl={2}>
              <Typography variant="body2">TRS ID</Typography>
            </Grid>
            <Grid item xs={12} sm={8} md={9} lg={10} xl={10}>
              <TextField
                disabled
                value="trs_66c87b54a2b7dc2c1740d639"
                fullWidth
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={2} xl={2}>
              <Typography variant="body2">Last Updated At</Typography>
            </Grid>
            <Grid item xs={12} sm={8} md={9} lg={10} xl={10}>
              <TextField
                disabled
                value="2024-08-23T12:06:44.930Z"
                fullWidth
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={2} xl={2}>
              <Typography variant="body2">Transformation Code</Typography>
            </Grid>
            <Grid item xs={12} sm={8} md={9} lg={10} xl={10}>
              <Box sx={{ position: 'relative', maxHeight: 400, overflowY: 'auto', border: '1px solid #ccc', borderRadius: 2, p: 2 }}>
                <SyntaxHighlighter language="javascript" customStyle={{ backgroundColor: 'transparent' }} wrapLongLines >
                  {`(request, context) => {
    // Initialize a counter
    let itemCounter = 0;
    // Process a list of items
    request.payload.items = request.payload.items || [];
    request.payload.items.forEach(item => {
      if (item.status === 'active') {
        itemCounter++;
        item.updated_at = new Date().toISOString();
      } else {
        item.status = 'inactive';
      }
    });

    // Add a summary field
    request.payload.summary = {
      activeItemCount: itemCounter,
      totalItems: request.payload.items.length
    };

    // Add a new header
    request.headers['X-Item-Count'] = itemCounter.toString();

    // Process query parameters
    request.queryParams.processedAt = new Date().toISOString();

    // Error handling for missing fields
    if (!request.payload.items.length) {
      throw new Error('No items to process');
    }

    return request;
  }`}
                </SyntaxHighlighter>

                {/* Copy button */}
                <IconButton
                  edge="end"
                  sx={{
                    position: 'absolute',
                    top: 20, // Adjust as needed
                    right: 30, // Adjust as needed
                    color: 'text.disabled',
                  }}
                >
                  <Iconify width={18} icon="solar:copy-bold" />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Box>
        {/* </Card> */}
      </Drawer >
    </>
  );
}