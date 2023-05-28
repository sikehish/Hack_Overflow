import axios from "axios" 
import {
  Container,
  Button,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { useEffect,useState } from "react";


const BlogTemplate = () => {

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
    <Container>
        {blogs.map((post) => (
            <>
      <Typography variant="h4" component="h1" gutterBottom>
        {post.title}
      </Typography>
      <Grid container spacing={2}>
          <Grid item key={post.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                title={post.title}
              />
              <CardContent >
                <Typography gutterBottom variant="h5" component="h2">
                  {post.title}
                </Typography>
                <Typography>{post.body}</Typography>
              </CardContent>
            </Card>
          </Grid>
      </Grid>
      <Button>Delete</Button>
      </>
        ))}
    </Container>
  );
};

export default BlogTemplate;
