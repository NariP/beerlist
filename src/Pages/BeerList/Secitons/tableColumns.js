const columns = [
  {
    field: 'url',
    title: 'Image',
    render: rowData => (
      <img
        src={rowData.image_url}
        alt={rowData.name}
        style={{
          width: 50,
          height: 50,
          objectFit: 'cover',
          borderRadius: '50%',
        }}
      />
    ),
  },
  { title: 'Name', field: 'name' },
  { title: 'Abv', field: 'abv' },
  { title: 'Tagline', field: 'tagline' },
];
export default columns;
