import React from 'react';
import { RichArea } from '../components/rich-area';

export default function HomePage() {
  const [state, setState] = React.useState<string>();
  return (
    <RichArea
      label="content"
      description="describe your post"
      state={state}
      setState={setState}
    />
  );
}
