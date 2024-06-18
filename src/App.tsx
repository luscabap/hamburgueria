import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import light from './themes/light';
import dark from './themes/dark';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState(light);

  const onChangeTheme = () => {
    setTheme(theme.name === "light" ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <Header 
        onChangeTheme={onChangeTheme}
        imgBanner='https://preodemo.gumlet.io/usr/venue/7602/web/646fbf3abf9d0.png'
      />
    </ThemeProvider>
  )
}

export default App
