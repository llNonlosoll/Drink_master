import { useState } from 'react';
import { useTheme } from '../../Hooks/useTheme';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

const Switcher = styled(Switch)({
  width: 40,
  height: 20,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 18,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(20px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 1,
    color: 'rgba(243, 243, 243, 1)',
    '&.Mui-checked': {
      transform: 'translateX(20px)',
      color: '#161F37',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#F3F3F3',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    width: 18,
    height: 18,
    boxShadow: '1px 1px 2px 0px rgba(0, 0, 0, 0.10) inset',
    borderRadius: 12,
  },
  '& .MuiSwitch-track': {
    borderRadius: 12,
    opacity: 1,
    backgroundColor: '#161F37',
    color: 'rgba(243, 243, 243, 1)',
    boxSizing: 'border-box',
  },
});

export default function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();
  const [state, setState] = useState(theme === 'light' ? false : true);

  const handleChange = () => {
    setState(!state);
    if (state === true) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return <Switcher checked={state} onChange={handleChange} name="switcher" />;
}
