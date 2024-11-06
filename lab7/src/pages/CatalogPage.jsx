import React from 'react';
import Catalog from '../components/Catalog/Catalog';
import { helis } from '../data/dataCatalog.js'
import Crude from '../components/Crude/Crude.jsx';
import View from '../components/View.jsx';

function CatalogPage() {
  return (
    <div>
      <Crude />
      <Catalog helis = {helis}/>
      <View />
    </div>
  );
}

export default CatalogPage;
