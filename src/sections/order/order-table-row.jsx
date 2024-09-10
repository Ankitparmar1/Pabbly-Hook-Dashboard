import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MenuList from '@mui/material/MenuList';
import Collapse from '@mui/material/Collapse';
import MenuItem from '@mui/material/MenuItem';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableCell from '@mui/material/TableCell';
import ListItemText from '@mui/material/ListItemText';

import { useBoolean } from 'src/hooks/use-boolean';

// import { fDate, fTime } from 'src/utils/format-time';

import { IconButton, Typography } from '@mui/material';

import { Label } from 'src/components/label';
import { Iconify } from 'src/components/iconify';
import { ConfirmDialog } from 'src/components/custom-dialog';
import { usePopover, CustomPopover } from 'src/components/custom-popover';

export function OrderTableRow({ row, selected, onViewRow, onSelectRow, onDeleteRow }) {
  const confirm = useBoolean();
  const collapse = useBoolean();
  const popover = usePopover();

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
            <Label
              variant="soft"
              color={
                (row.status === 'Active' && 'success') ||
                // (row.status === 'Inactive' && 'warning') ||
                // (row.status === 'rejected' && 'error') ||
                (row.status === 'Inactive' && 'error') ||
                'default'
              }
            >
              {row.status}
            </Label>

            {/* <Box component="span"><Label variant="soft" size="small" color='success'>success</Label></Box> */}
            <Box
              component="span"
              sx={{ color: 'text.disabled', fontSize: '12px', fontWeight: 400 }}
            >
              Aug 8,2024 15:25:33.366
            </Box>
          </Stack>
        </Stack>
      </TableCell>

      <TableCell>
        <Stack spacing={3} direction="row" alignItems="center">
          <Stack
            sx={{
              typography: 'body2',
              flex: '1 1 auto',
              alignItems: 'flex-start',
            }}
          >
            <Box component="span">
              {' '}
              <a
                style={{ textDecoration: 'none', color: '#078dee' }}
                href="http://localhost:3030/dashboard/"
              >
                Rajpal Singh Tomar
              </a>
            </Box>
            <Typography sx={{ color: ' #919eab ', fontSize: '14px' }}>Ankit</Typography>
            <Box
              component="span"
              sx={{ color: 'text.disabled', fontSize: '12px', fontWeight: 400 }}
            >
              {/* WhatsApp Business Account ID:117359445455733 */}
            </Box>
          </Stack>
        </Stack>
      </TableCell>

      <TableCell>
        <Stack spacing={3} direction="row" alignItems="center">
          {/* <Stack
            sx={{
              typography: 'body2',
              flex: '1 1 auto',
              alignItems: 'flex-start',
            }}
          >
            <Box component="span">
              {' '}
              <a
                style={{ textDecoration: 'none', color: '#078dee' }}
                href="http://localhost:3030/dashboard/"
              >
                Rajpal Singh Tomar
              </a>
            </Box>
            <Typography sx={{ color: ' #919eab ', fontSize: '14px' }}>Ankit</Typography>
            <Box
              component="span"
              sx={{ color: 'text.disabled', fontSize: '12px', fontWeight: 400 }}
            >
            </Box>
          </Stack> */}
        </Stack>
      </TableCell>

      <TableCell>
        <Stack spacing={2} direction="row" alignItems="right">
          <Stack
            sx={{
              typography: 'body2',
              flex: '1 1 auto',
              alignItems: 'flex-start',
            }}
          >
            <Box component="span">
              {' '}
              <a
                style={{ textDecoration: 'none', color: '#078dee' }}
                href="http://localhost:3030/dashboard/four"
              >
                {' '}
                0 Requests
              </a>
            </Box>
            <Box
              component="span"
              sx={{ color: 'text.disabled', fontSize: '14px', fontWeight: 400 }}
            >
              <a
                style={{ textDecoration: 'none', color: '#919eab' }}
                href="http://localhost:3030/dashboard/five"
              >
                0 events
              </a>
            </Box>
          </Stack>
          <Stack spacing={2} direction="row" alignItems="right">
            <IconButton
              sx={{ mt: 2, ml: 0 }}
              color={popover.open ? 'inherit' : 'default'}
              onClick={popover.onOpen}
            >
              <Iconify icon="eva:more-vertical-fill" />
            </IconButton>
          </Stack>
        </Stack>
      </TableCell>


    </TableRow>
  );

  const renderSecondary = (
    <TableRow>
      <TableCell sx={{ p: 0, border: 'none' }} colSpan={8}>
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
        <MenuList >
          <MenuItem>
            <Iconify icon="mingcute:history-fill" />
            Update
          </MenuItem>
          <MenuItem>
            <Iconify icon="clarity:clone-solid" />
            Clone
          </MenuItem>
          <MenuItem>
            <Iconify icon="solar:move-to-folder-bold" />
            Move To Folder
          </MenuItem>
          <MenuItem>
            <Iconify icon="material-symbols:family-history" />
            Connection History
          </MenuItem>
          <MenuItem
            onClick={() => {
              confirm.onTrue();
              popover.onClose();
            }}
            sx={{ color: 'error.main' }}
          >
            <Iconify icon="solar:trash-bin-trash-bold" />
            Delete Connection
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
    </>
  )
}
