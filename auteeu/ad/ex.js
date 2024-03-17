  const snapshot = await db.collection('cities').doc('SF').collection('comments').get();
  const allComments = [];
  snapshot.forEach(doc => {
    allComments.push(doc.data());
  });
  expect(allComments.length).to.equal(3);  
