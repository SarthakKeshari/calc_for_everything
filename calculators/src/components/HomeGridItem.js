import * as React from 'react';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Link from '@mui/material/Link';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.h6,
    padding: theme.spacing(1),
    textAlign: 'center',
    textDecorationLine: "none",
    color: theme.palette.text.secondary,
  }));

export default function HomeGridItem(props) {
  return (
        <Grid item xs={12} sm={12} md={4} lg={3}>
            <Link href={props.path} underline="none">
                <CardActionArea>
                    <Item>
                        {props.calcName}   
                    </Item>
                </CardActionArea>
            </Link>
        </Grid>
  );
}