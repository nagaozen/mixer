import { createContext, useContext, useState } from 'react';

interface MenuContextData {
  getProjectData(id: string): void;
  project: object;
}

const MenuContext = createContext<MenuContextData>({} as MenuContextData);

const MenuProvider: React.FC = ({ children }) => {
  const [data, setData] = useState({});

  function getProjectData(id: string) {
    const project = sessionStorage.getItem('project');
    if (project) {
      setData(project);
      return;
    }

    fetch(`http://localhost:3333/projects/${id}`).then(response => {
      response.json().then(data => {
        setData(data);
        sessionStorage.setItem('project', data);
      });
    });
  }

  return (
    <MenuContext.Provider value={{ getProjectData, project: data }}>
      {children}
    </MenuContext.Provider>
  );
};

function useMenu(): MenuContextData {
  const context = useContext(MenuContext);

  if (!context) {
    throw new Error('useMenu not being used correctly');
  }

  return context;
}

export { MenuProvider, useMenu };
