import React from 'react';
import { Button, Textarea } from '@mantine/core';
import { WrappedRTE } from './wrapped-rte';

export type RichAreaProps = {
  label: string;
  description: string;
  initialValue?: string;
  state?: string
  setState: (s: string) => unknown;
};

const Description = (props: {
  variant: number;
  toggleVariant: () => unknown;
  description: string;
}) => {
  const { variant, toggleVariant, description } = props;
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <span>{description}</span>
      <Button
        variant="subtle"
        onClick={toggleVariant}
        sx={{
          height: 'auto',
          fontSize: 12,
          paddingInline: 4,
          alignItems: 'center',
        }}
      >
        {variant % 2 === 0 ? 'use rich text editor' : 'use plain text editor'}
      </Button>
    </div>
  );
};

export const RichArea = (props: RichAreaProps) => {
  const [variant, setVariant] = React.useState(() => {
    const prev = props.initialValue;
    const v = prev ? (prev.includes('</') ? 1 : 0) : 0;
    return v;
  });

  const description = React.useMemo(
    () => (
      <Description
        variant={variant}
        toggleVariant={() => setVariant(p => p + 1)}
        description={props.description}
      />
    ),
    [variant, props.description]
  );

  return (
    <>
      {variant % 2 === 0 && (
        <Textarea
          minRows={4}
          description={description}
          label={props.label}
          autosize
          variant="filled"
          value={props.state}
          onChange={(e) => {
            props.setState(e.target.value);
          }}
          styles={{
            input: {
              border: 'initial',
              overflow: 'hidden',
              backgroundColor: '1px solid #cccc',
            },
          }}
        />
      )}
      {variant % 2 !== 0 && (
        <WrappedRTE
          key={props.initialValue ?? `${variant}`}
          label={props.label}
          value={props.state ?? props.initialValue}
          description={description}
          onChange={props.setState}
        />
      )}
    </>
  );
};
