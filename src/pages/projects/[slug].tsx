import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { Slider } from 'antd';

import menuOptions from '@/components/SidebarData';
import { IProject } from '@/types';
import api from '@/services/api';

const Project = (props) => {
  let minDate;
  let maxDate;
  const router = useRouter();

  const [project, setProject] = useState({} as IProject);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const project = menuOptions.find(
      project => project.path === router.asPath
    );

    (async function getProject() {
      const response = await api.get(`projects/${project?.id}`);
      const _p = response.data
      setProject(_p);
      setLoading(false);
      debugger
      minDate = Date.parse(_p.contracts.constraints.dttm[0]);
      maxDate = Date.parse(_p.contracts.constraints.dttm[1]);
    })();
  }, [router.asPath])

  return loading ? (
    <div>Carregando...</div>
  ) : (
    <>
      <h1>{project.summary.title}</h1>
      <div>
        <div>{project.id}</div>
      </div>
    </>
  );
};

export default Project;
