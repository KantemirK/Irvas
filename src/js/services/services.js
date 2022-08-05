const postData = async(url, data) => {
    const res = await fetch(url, {
        method: 'POST',
        /* headers: {
            'Content-type': `application/json; charset=utf-8`
        }, */
        body: data
    });

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    //return await res.json(); //server.php нам отдает данные в формате текста, а не json. 
    return await res.text();
};

export default postData;