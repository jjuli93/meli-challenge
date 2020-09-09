import i18next from 'i18next';

i18next.addResources('es', 'SearchList', {
  title: `{{searchText}} en ${i18next.t('General:appTitle')}`,
  emptySearch: 'No hay productos que coincidan con tu busqueda.'
});
