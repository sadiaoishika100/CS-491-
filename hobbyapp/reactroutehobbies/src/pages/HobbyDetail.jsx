import { useParams } from 'react-router-dom';

const hobbyDetails = {
  1: {
    title: 'Drawing',
    info: 'I like to draw and sketch cartoons or anime sometimes.',
  },
  2: {
    title: 'Cartoons',
    info: 'I like watching cartoons from all demographics.',
  },
  3: {
    title: 'Listening to Music',
    info: 'I like listening to music, often on Youtube.',
  },
  4: {
    title: 'Coding',
    info: 'I sometimes like to do coding for myself.',
  },
};

const HobbyDetail = () => {
  const { id } = useParams();
  const hobby = hobbyDetails[id];

  if (!hobby) return <p>Hobby not found.</p>;

  return (
    <div className="text-center">
      <h2>{hobby.title}</h2>
      <p>{hobby.info}</p>

      <img
        src={`https://picsum.photos/600/300?random=${id}`}
        alt={hobby.title}
        className="img-fluid mt-3"
      />
    </div>
  );
};

export default HobbyDetail;