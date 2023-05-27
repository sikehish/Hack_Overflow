import { makeStyles } from '@material-ui/core/styles';
import axios from "axios" 
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from '@material-ui/core';
import { useEffect, useState } from 'react';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
  },
  card: {
    display: 'flex',
  },
  cardContent: {
    flex: '1 0 auto',
  },
  cardMedia: {
    width: 160,
  },
}));



const BlogTemplate = () => {
  const classes = useStyles();

  useEffect(() =>{
    const fetchBlogs=async ()=>{
            const data =await axios.get("/api/blog")
            console.log(data)
            setBlogs(data.data)
    }

    fetchBlogs()
     
    
  },[])

  const [blogs,setBlogs]=useState()

  return (
    <Container className={classes.container}>
        {blogs.map((post) => (
            <>
      <Typography variant="h4" component="h1" gutterBottom>
        {post.title}
      </Typography>
      <Grid container spacing={2}>
          <Grid item key={post.id} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                title={post.title}
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {post.title}
                </Typography>
                <Typography>{post.body}</Typography>
              </CardContent>
            </Card>
          </Grid>
      </Grid>
      </>
        ))}
    </Container>
  );
};

export default BlogTemplate;
