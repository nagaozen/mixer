import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { Slider } from 'antd';

import menuOptions from '@/components/SidebarData';
import { IProject } from '@/types';
import api from '@/services/api';

// const marks = {
//   0: '0°C',
//   26: '26°C',
//   37: '37°C',
//   100: {
//     style: {
//       color: '#f50',
//     },
//     label: <strong>100°C</strong>,
//   },
// };

const Project = () => {
  let minDate;
  let maxDate;
  const router = useRouter();

  const [project, setProject] = useState({} as IProject);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const p = menuOptions.find(
      project => project.path === `/projects/a-garota-da-moto-2-temporada`,
    );
    (async function getProject() {
      const response = await api.get(`projects/${p?.id}`);
      debugger;
      await setProject(response.data);
      minDate = Date.parse(project.contracts.constraints.dttm[0]);
      maxDate = Date.parse(project.contracts.constraints.dttm[1]);
      debugger;
      setLoading(false);
    })();
  }, []);

  return loading ? (
    <div>Carregando...</div>
  ) : (
    <>
      <Slider
        range
        min={minDate}
        max={maxDate}
        step={86400000}
        defaultValue={[0, 1000]}
      ></Slider>
      <h1>{project.summary.title}</h1>
      <div>
        <div>{project.id}</div>
      </div>
    </>
  );
};

export default Project;
