
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import DrawerAppBar from "../components/Navbar";



const BlogTemplate = () => {


const blogs =[{
  "_id": "6472c224d7123281dce52e6c",
  "title": "The Simple Dollar",
  "body": "The Simple Dollar offers practical advice on personal finance, including budgeting, saving, investing, and frugal living. The blog provides tips and strategies to help readers achieve financial stability and make informed decisions about their money. You can find it at: https://www.thesimpledollar.com/",
  "__v": 0
},
{
  "_id": "6472c26cd7123281dce52e6f",
  "title": "NerdWallet",
  "body": "NerdWallet is a comprehensive resource for personal finance topics. The blog covers a wide range of subjects, including credit cards, loans, mortgages, investing, and retirement planning. NerdWallet provides educational articles, reviews, and tools to help individuals manage their finances effectively. You can find it at: https://www.nerdwallet.com/blog/",
  "__v": 0
},
{
  "_id": "6472c294d7123281dce52e71",
  "title": "Mr. Money Mustache",
  "body": "Mr. Money Mustache is a popular blog focused on financial independence and early retirement. The blog emphasizes frugality, smart investing, and living a fulfilling life with financial freedom. It offers practical advice and a unique perspective on achieving financial goals. You can find it at: https://www.mrmoneymustache.com/",
  "__v":0},]

  return (
    <>
    <DrawerAppBar/>
      <h1>Blogs</h1>
      <Container >
        {blogs.map((post) => (
            <>
      <Typography variant="h4" component="h1" gutterBottom>
        {post.title}
      </Typography>
      <Grid container spacing={2} style={{"textAlign":"center","display":"flex","justifyContent":"center","margin":"40px 0"}}>
          <Grid item key={post.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                title={post.title}
              />
              <CardContent >
                
                <Typography style={{"textAlign":"center"}}>{post.body}</Typography>
              </CardContent>
            </Card>
          </Grid>
      </Grid>
      </>
        ))}
    </Container>
    </>
    
  );
};

export default BlogTemplate;
