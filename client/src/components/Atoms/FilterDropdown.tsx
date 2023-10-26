import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SortIcon from '@mui/icons-material/Sort';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../actionTypes/actionType';

export function FilterDropdown() {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleFilter = (type) => {
    dispatch(setFilter(type));
    setAnchorEl(null);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <SortIcon sx={{ color: 'white' }}/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => handleFilter("alphabetical")}>Alphabetical</MenuItem>
        <MenuItem onClick={() => handleFilter("updated_at")}>Updated Date</MenuItem>
        <MenuItem onClick={() => handleFilter("language")}>Language</MenuItem>
      </Menu>
    </div>
  );
}