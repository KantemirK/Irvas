const postData = async(url, data, contentType) => {
    const res = await fetch(url, {
        method: 'POST',
        /* headers: {
            'Content-type': `application/${contentType}; charset=utf-8`
        }, */
        body: data
    });

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.text();
    /* return await res.json(); */
};

export default postData;