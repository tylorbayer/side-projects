import React from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';


export default class Reviews extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            reviews: []
        }
    }

    componentDidMount() {
        axios
        .get('https://shakespeare.podium.com/api/reviews', {headers: { 'x-api-key': this.props.apiKey}})
        .then(response => {
            const reviews = response.data;
            console.log(reviews)
            this.setState({reviews})
        })
        .catch(err => {
            alert("Failed to get reviews; API token may be incorrect. Try logging back in.")
        })
    }
    
    render() {
        const reviews = this.state.reviews
        const reviewElements = reviews.map(review => {
            // TODO: Paginate the card grid of reviews
            return (
                <Grid key={review.id} item xs={6}>
                    <Card>
                        <CardHeader
                            avatar={
                                <Avatar aria-label="recipe">
                                    {review.author.charAt(0).toUpperCase()}
                                </Avatar>
                            }
                            action={
                                <Rating key={review.id} value={review.rating} readOnly />
                            }
                            title={review.author}
                            subheader={new Date(review.publish_date).toLocaleString('en')}
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                This impressive paella is a perfect party dish and a fun meal to cook together with your
                                guests. Add 1 cup of frozen peas along with the mussels, if you like.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            )
        })

        return (
            <Grid container spacing={3} style={{ marginTop: 10 }}>
                {reviewElements}
            </Grid>
        );
    }
}
