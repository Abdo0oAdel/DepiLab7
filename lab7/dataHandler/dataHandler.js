export class DataHandler {
    fetchData(url) {
        return `Fetched data from ${url}`;
    }
    saveData(data) {
        return `Saved data: ${JSON.stringify(data)}`;
    }
}
