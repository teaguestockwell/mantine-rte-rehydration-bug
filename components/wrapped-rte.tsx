import { Input } from '@mantine/core';
import type { RichTextEditorProps as RTEProps } from '@mantine/rte';
import React from 'react';
import { DynamicRTE } from './dynamic-rte';

export type RichTextEditorProps = RTEProps & {
  label: string;
  description: string | React.ReactNode;
};

// https://github.com/mantinedev/mantine/blob/master/src/mantine-rte/src/components/RichTextEditor/default-control.ts
const controls = [
  ['link', 'video'],
  ['unorderedList', 'orderedList'],
  ['bold', 'italic', 'underline', 'strike', 'blockquote', 'codeBlock'],
  ['h1', 'h2', 'h3', 'h4'],
] as any;

const styles = {
  root: {
    marginTop: 6,
    border: '1px solid #cccc',
    backgroundColor: 'initial',
  },
};

export const WrappedRTE = (props: RichTextEditorProps) => (
  <Input.Wrapper label={props.label} description={props.description}>
    <DynamicRTE id="editor" controls={controls} sticky={false} styles={styles} {...props} />
  </Input.Wrapper>
);
