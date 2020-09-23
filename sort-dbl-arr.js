const arr1 = [
  {id: 3, address: 'Whatever drive 9', propertyId: 'ID3'},
  {id: 1, address: 'Whatever drive 1', propertyId: 'ID1'},
  {id: 2, address: 'Whatever drive 35', propertyId: 'ID2'},
  {id: 4, address: 'Whatever drive 6', propertyId: 'ID4'},
  ]
  
  const arr2 = [
  {id: 'ID1', size: 'tiny'},
  {id: 'ID3', size: 'huge'},
  {id: 'ID2', size: 'medium'},
  ]
  
  let longest = function() {
    return arr1.length >= arr2.length ? arr1.length
        : arr2.length
  }()
  
  let count = 0;
  
  let result = new Array(longest).fill(null)
  
  while (count < longest) {
    const idArr1 = arr1[count] && arr1[count].id
    const idArr2 = arr2[count] && Number(arr2[count].id.match(/[0-9]/).pop())
  
    // CHECK ARR 1
    if (result[idArr1 - 1]) {
      result[idArr1 - 1]['address'] = arr1[count].address
      result[idArr1 - 1]['propertyId'] = arr1[count].propertyId
    }
    if (!result[idArr1 - 1] && arr1[count]) {
      result[idArr1 - 1] = {
        id: idArr1, 
        address: arr1[count].address, 
        size: null, 
        propertyId: arr1[count].propertyId
      }
    }
  
    // CHECK ARR 2
    if (result[idArr2 - 1]) {
      result[idArr2 - 1]['size'] = arr2[count].size
    }
    if (!result[idArr2 - 1] && arr2[count]) {
      result[idArr2 - 1] = {id: idArr2, size: arr2[count].size}
    }
  
    count++;
  }
  
  console.log(result)