import Nav from "../../Nav/page";

export default function Trading() {
  return (
    <>
      <div className="w-full h-screen overflow-hidden">    
        <Nav />
        <iframe
          src="/notes4.html"
          className="w-5/6 ml-36 rounded-md h-screen mt-8 "
          title="Trading Notes"
        />
      </div>
    </>
  );
}
