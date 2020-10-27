import React from 'react';

import styled from '@material-ui/core/styles/styled';
import { SvgIconTypeMap, SvgIcon } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import Typography from '@material-ui/core/Typography';

const Container = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const Paragraph = styled(Typography)({
  fontSize: '.9rem',
  paddingBottom: '.5rem',
  marginLeft: '.375rem',
});

const Icon = styled(SvgIcon)({
  fontSize: '1rem',
  paddingBottom: '.5rem',
});

type IconTitleProps = {
  title: string | number;
  icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
};

const IconTitle = ({ title, icon }: IconTitleProps) => {
  return (
    <Container>
      <Icon component={icon} />
      <Paragraph>{title}</Paragraph>
    </Container>
  );
};

export default IconTitle;
