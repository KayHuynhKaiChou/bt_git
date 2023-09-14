import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface PostUser {
    nameUser ?: string,
    id : number,
    title : string
  }

type Props = {
    posts : Array<PostUser> // hoặc Post[]
}

const PostComponent: React.FC<Props> = ({posts}) => {

    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>idPost</TableCell>
                <TableCell align="center">UserName</TableCell>
                <TableCell align="center">Title&nbsp;</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {posts.map((post) => (
                <TableRow
                key={post.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {post.id}
                </TableCell>
                <TableCell align="left">{post.nameUser}</TableCell>
                <TableCell align="left">{post.title}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    );
}

export default PostComponent

