interface IMediaTypesContraints {
  region: string;
  expire: string;
}

interface ISplitRules {
  type: string;
  split: number[];
}

export interface IProject {
  id: string;
  summary: {
    title: string;
    overview: string;
    release_date: string;
    format: string;
    producer: string;
    co_producer: string[];
    distribution: string[];
    split_rules: ISplitRules[];
    special_rules: string[];
  };
  contracts: {
    type: string;
    changes: [
      {
        category: string;
        new_value: number;
      },
    ];
    constraints: {
      medias: {
        digital: {
          vod: IMediaTypesContraints[];
          tvod: IMediaTypesContraints[];
          svod: IMediaTypesContraints[];
          fvod: IMediaTypesContraints[];
        };
        conventional: {
          open_tv: IMediaTypesContraints[];
          paid_tv: IMediaTypesContraints[];
          theaters: IMediaTypesContraints[];
          home_video: IMediaTypesContraints[];
        };
      };
      dttm: string[];
    };
  };
}
