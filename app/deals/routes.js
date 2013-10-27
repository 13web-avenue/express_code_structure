//Let's say our car dealership has a "deals" entity with
//typical Create Read Update Delete (CRUD/REST) operations

function createDeal(req, res) {
  //...
}

function getDeal(req, res) {
  //...
}

function getDeals(req, res) {
  //...
}

function updateDeal(req, res) {
  //...
}

function deleteDeal(req, res) {
  //...
}

function setup(app) {
  app.post('/deals', createDeal);
  app.get('/deals/:id', getDeal);
  app.get('/deals', getDeals);
  app.put('/deals/:id', updateDeal);
  app.del('/deals/:id', deleteDeal);
}
