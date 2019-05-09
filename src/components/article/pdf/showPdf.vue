<template>

</template>

<script>
    import "src/styles/js/pdfobject"

    export default {
        name: "showPdf",
        created() {
            let myPDF = new PDFObject({
                url: "src/styles/images/pdf/h.pdf"
            }).embed();
        }
    }
</script>

<style scoped>

</style>
