const ulsan12 = 'XNo1uhF3LR%2FHjQD0GAYsNZeeqaa1ZtxEgVQ2DtaFwNqZZ%2FxnaOjgnsvuitSFBTZVwz1DXqeAe3PVOqQaqH4%2FNw%3D%3D'

const get12 = async () => {
    await fetch(ulsan12).then((response) => response.text()).then((xml) => {
        let data = new DOMParser().parseFromString(xml, "text/xml")
    })
}