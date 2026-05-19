import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import MovieDataService from '../services/movies';

import {
    Container,
    Row,
    Col,
    Card,
    Image,
    Button
} from 'react-bootstrap';

import moment from 'moment';

const Movie = (props) => {

    const [movie, setMovie] = useState({
        id: null,
        title: '',
        rated: '',
        reviews: []
    });

    const fetchMovie = async (id) => {
        try {
            const response = await MovieDataService.get(id);

            setMovie(response.data);

            console.log('Movie Data:', response.data);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchMovie(props.match.params.id);
    }, [props.match.params.id]);

    const handleDeleteReview = async (reviewId, index) => {
        try {

            await MovieDataService.deleteReview(
                reviewId,
                props.user.id
            );

            setMovie((prevMovie) => {

                const updatedReviews = [...prevMovie.reviews];

                updatedReviews.splice(index, 1);

                return {
                    ...prevMovie,
                    reviews: updatedReviews
                };
            });

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Container className="mt-4">

            <Row className="g-4">

                <Col md={4}>
                    {
                        movie.poster && (
                            <Image
                                src={`${movie.poster}/1000px250`}
                                fluid
                                rounded
                            />
                        )
                    }
                </Col>

                <Col md={8}>

                    <Card className="shadow-sm border-0">

                        <Card.Header
                            as="h4"
                            className="fw-bold"
                        >
                            {movie.title}
                        </Card.Header>

                        <Card.Body>

                            <Card.Text>
                                {movie.plot}
                            </Card.Text>

                            {
                                props.user && (
                                    <Link
                                        to={`/movies/${props.match.params.id}/review`}
                                        className="btn btn-dark"
                                    >
                                        Add Review
                                    </Link>
                                )
                            }

                        </Card.Body>

                    </Card>

                    {/* Reviews */}
                    <div className="mt-4">

                        <h3 className="mb-3">
                            Reviews
                        </h3>

                        {
                            movie.reviews.map((review, index) => (
                                <Card
                                    key={index}
                                    className="mb-3 shadow-sm"
                                >
                                    <Card.Body>

                                        <div className="d-flex justify-content-between align-items-center mb-2">

                                            <h6 className="mb-0">
                                                {review.name}
                                            </h6>

                                            <small className="text-muted">
                                                {moment(review.date).format(
                                                    'Do MMMM YYYY'
                                                )}
                                            </small>

                                        </div>

                                        <p className="mb-3">
                                            {review.review}
                                        </p>

                                        {
                                            props.user &&
                                            props.user.id === review.user_id && (

                                                <Row>

                                                    <Col xs="auto">

                                                        <Link
                                                            to={{
                                                                pathname:
                                                                    `/movies/${props.match.params.id}/review`,
                                                                state: {
                                                                    currentReview: review
                                                                }
                                                            }}
                                                            className="btn btn-outline-primary btn-sm"
                                                        >
                                                            Edit
                                                        </Link>

                                                    </Col>

                                                    <Col xs="auto">

                                                        <Button
                                                            variant="outline-danger"
                                                            size="sm"
                                                            onClick={() =>
                                                                handleDeleteReview(
                                                                    review._id,
                                                                    index
                                                                )
                                                            }
                                                        >
                                                            Delete
                                                        </Button>

                                                    </Col>

                                                </Row>
                                            )
                                        }

                                    </Card.Body>
                                </Card>
                            ))
                        }

                    </div>

                </Col>

            </Row>

        </Container>
    );
};

export default Movie;