const url1='DummyLink1';
// const url2='DummyLink2';
// const url2='DummyLink3';
function download(url1,process){
    console.log(`Downloading started `,$(url1));
    setTimeout(()=>{
        console.log(`Downloading Completed` ,$(url1))
        process(url1);
    },2000);
}
function process(url1){
    console.log(`Processing Image`,$(url1));

}
download(url1,process)
