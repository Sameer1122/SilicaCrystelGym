export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
 export  const youtubeOptions =  {
    method: 'GET',
    params: {
      id: 'YQHsXMglC9A',
      hl: 'en',
      gl: 'US',
      next: 'CBQSDRILWVFIc1hNZ2xDOUEYACreAQjQr43tubfzi64BCNi24eOapu-n7AEIgejpz9fcuPajAQjwqMe8v7SEuJ0BCI3CwqDWu4nahAEItNrrwNnAzuQ1CK6-ooCH-Jj5JAik8O-ahq3L1sYBCMb965f10YS4UwiNkaXwtL_gzi4I1vOMu5f7r4HeAQjEuYHvqNfimgwIzvHK75mt1Z27AQjw_7n5yaLZ3_UBCJOq5eCOo-XS_QEIocGSnpeajIsXCN2F2tj65L_4zwEI4KbhwtjP98duCI_C_IbhttbzTAi2gO-y3KbjuZgBCNbN7-m31YCKVmoPd2F0Y2gtbmV4dC1mZWVk'
    },
    headers: {
      'X-RapidAPI-Key': 'f40abf164amsh855badceaa2dbbfp1ee31fjsn47762bbf1cf1',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();

    return data;
}