
export default function Home() {
  return (
    <>
      <main className="dark w-screen h-screen bg-background">
          <div className="max-w-[1440px] mx-auto backgroundDes">
            <div className="w-[40%] mx-auto py-16">
              <div className="flex justify-between">
                  <h1 className="text-white font-Josefin font-bold tracking-[1rem] text-4xl">TODO</h1>
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fill-rule="evenodd" d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"/></svg>
              </div>
              <div className="bg-todo-back flex items-center px-5 py-4 rounded shadow-xl mt-8">
                  <div className="w-6 h-6 border border-text-one rounded-full"></div>
                  <input type="text" placeholder="Create a new todo..." className="bg-todo-back ml-5 font-Josefin outline-none"/>
              </div>
              <div className="bg-todo-back mt-5 rounded shadow-xl">
                <ul>
                  <li className="border-b border-b-text-one py-4">
                    <div className="flex items-center px-5">
                      <button className="w-6 h-6 border border-text-one rounded-full"></button>
                      <p className="font-Josefin ml-5 text-todo">Todo 1</p>
                    </div>
                  </li>
                </ul>
                <div className="px-4 font-Josefin flex items-center justify-between text-text-two py-3">
                  <div>
                    <p className="text-sm">5 items left</p>
                  </div>
                  <div className="space-x-3 font-bold text-sm">
                    <button className="text-Bright-Blue">All</button>
                    <button>Active</button>
                    <button>Completed</button>
                  </div>
                  <div>
                    <button className="text-sm">Clear Completed</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </main>
    </>
  );
}
