export type FetchedTagsDataType = {
    tags: {
      items: {
        count: number;
        has_synonyms: boolean;
        is_moderator_only: boolean;
        is_required: boolean;
        name: string;
      }[];
    };
    total: number;
  };