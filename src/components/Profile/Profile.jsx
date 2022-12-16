import PropTypes from 'prop-types';
import {
  Card,
  CardBody,
  CardFooter,
  CardLi,
  CardPoster,
  CardText,
  CardTitle,
  SpanLabel,
  SpanText,
  Tag,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Card>
      <CardBody>
        <CardPoster src={avatar} alt={username} />
        <CardTitle>{username}</CardTitle>
        <Tag>@{tag}</Tag>
        <CardText>{location}</CardText>
      </CardBody>

      <CardFooter>
        <CardLi>
          <SpanLabel>Followers:</SpanLabel>
          <SpanText>{followers}</SpanText>
        </CardLi>
        <CardLi>
          <SpanLabel>Views:</SpanLabel>
          <SpanText>{views}</SpanText>
        </CardLi>
        <CardLi>
          <SpanLabel>Likes:</SpanLabel>
          <SpanText>{likes}</SpanText>
        </CardLi>
      </CardFooter>
    </Card>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
