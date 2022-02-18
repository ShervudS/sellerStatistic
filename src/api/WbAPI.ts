import axios from 'axios';

export async function getWbData(url, date = '2022-02-10T08:44:50.379') {
    try {
        const response = await axios.get(
            `${process.env.MAIN_WB_URL}/${url}?dateFrom=${date}&key=${process.env.WB_TOKEN}`
        );
        return response.data;
    } catch (error) {
        error.response === 429
            ? setTimeout(() => getWbData(url, date), 10000)
            : console.error(error);
    }
}
