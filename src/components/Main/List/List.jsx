import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const postsData = [
    {
      thumbnail: '',
      title: 'Title1',
      author: 'Author1',
      ups: 15,
      date: '2022-03-16T10:40:00.000Z',
      id: '123'
    },
    {
      thumbnail: '',
      title: 'Title2',
      author: 'Author2',
      ups: 20,
      date: '2022-08-24T19:30:00.000Z',
      id: '345'
    },
    {
      thumbnail: '',
      title: 'Title3',
      author: 'Author3',
      ups: 24,
      date: '2022-02-24T09:45:00.000Z',
      id: '567'
    },
    {
      thumbnail: '',
      title: 'Title4',
      author: 'Author4',
      ups: 4,
      date: '2021-12-29T09:59:00.000Z',
      id: '789'
    }
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
