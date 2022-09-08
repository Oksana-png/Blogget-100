import style from './List.module.css';
import Post from './Post';
import {usePopular} from '../../../hooks/usePopular';

export const List = () => {
  const [popularPosts] = usePopular();

  console.log(popularPosts);
  const postsData = [
    {
      thumbnail: '',
      title: 'Title1',
      author: 'Author1',
      ups: 15,
      date: '2022-03-16T10:40:00.000Z',
      id: '123'
    },
  ];

  return (
    <ul className={style.list}>
      {/* из .map index не подойдет для уникального ключа */}
      {postsData.map((postData) => (
        <Post key={postData.id} postData={postData}/>
      ))}
      {/* чтоб передать массив (список), в котором будет список компонентов,
      нужен специальный ключ (пропс key)
      Этот key нужен, чтоб React не перерисовывал много раз одно и то же */}
    </ul>
  );
};
