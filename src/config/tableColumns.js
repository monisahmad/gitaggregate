import React from 'react';

const tableColumns = [{
  title: 'Username',
  dataIndex: 'username',
  key: 'username',
  render: text => (<a href={`https://github.com/${text}`}>{text}</a>),
},
{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
},
{
  title: 'Public Repos',
  dataIndex: 'public_repos',
  key: 'public_repos',
},
{
  title: 'Public Gists',
  dataIndex: 'public_gists',
  key: 'public_gists',
},
{
  title: 'Followers',
  dataIndex: 'followers',
  key: 'followers',
},
{
  title: 'Following',
  dataIndex: 'following',
  key: 'following',
},
{
  title: 'Created At',
  dataIndex: 'created_at',
  key: 'created_at',
},
];

export default tableColumns;
