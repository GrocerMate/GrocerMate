// ✅ Mobile Shopping List Drawer Component
import { useState } from 'react';

export default function ShoppingListDrawer({
  shoppingList,
  setShoppingList,
  buttonRef,
  stickToBottom
}) {

  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      {/* Floating Button with Count Bubble */}
      <div
        ref={buttonRef}
        className={`fixed left-6 z-50 transition-all duration-300 ${stickToBottom ? 'bottom-6' : 'bottom-24'
          }`}
      >
        <button
          onClick={() => setOpen(true)}
          className="relative bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-full shadow-lg text-sm border-white">
          🛒 View List
          {shoppingList.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {shoppingList.length}
            </span>
          )}
        </button>
      </div>


      {/* Slide-up Drawer */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-end md:items-center md:justify-center" onClick={() => setOpen(false)}>

          <div
            className="bg-white w-full md:max-w-md rounded-t-2xl md:rounded-lg p-4 md:p-6 max-h-[70vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl md:text-2xl font-semibold text-green-700">Your Shopping List</h3>

              <button
                onClick={() => setOpen(false)}
                className="text-sm text-green-600 hover:underline"
              >
                Close
              </button>
            </div>

            {shoppingList.length === 0 ? (
              <p className="text-sm text-gray-500">No items yet.</p>
            ) : (
              <ul className="space-y-2 text-sm text-gray-800">
                {shoppingList.map((item, idx) => (
                  <li key={idx} className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="font-medium">{item.name}</span>
                      <span className="text-xs text-gray-500">
                        ${item.price.toFixed(2)} x {item.quantity} = $
                        {(item.price * item.quantity).toFixed(2)}
                      </span>
                      <div className="flex items-center mt-1 gap-2">
                        <button
                          onClick={() => {
                            if (item.quantity > 1) {
                              setShoppingList(prev =>
                                prev.map(p =>
                                  p.name === item.name ? { ...p, quantity: p.quantity - 1 } : p
                                )
                              );
                            } else {
                              setShoppingList(prev => prev.filter(p => p.name !== item.name));
                            }
                          }}
                          className="px-2 py-0.5 rounded bg-gray-200 hover:bg-gray-300 text-sm"
                        >
                          –
                        </button>
                        <span className="px-2">{item.quantity}</span>
                        <button
                          onClick={() =>
                            setShoppingList(prev =>
                              prev.map(p =>
                                p.name === item.name ? { ...p, quantity: p.quantity + 1 } : p
                              )
                            )
                          }
                          className="px-2 py-0.5 rounded bg-gray-200 hover:bg-gray-300 text-sm"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() =>
                        setShoppingList(prev => prev.filter(p => p.name !== item.name))
                      }
                      className="text-red-500 text-xs hover:underline ml-2"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            )}
            {shoppingList.length > 0 && (
              <div className="mt-4 text-right text-sm font-semibold text-green-700">
                Total: $
                {shoppingList
                  .reduce((sum, item) => sum + (item.price || 0) * (item.quantity || 1), 0)
                  .toFixed(2)}
              </div>
            )}

            {shoppingList.length > 0 && (
              <button
                onClick={() => setShoppingList([])}
                className="w-full bg-green-600 hover:bg-green-700 text-white text-sm mt-6 py-2 rounded"
              >
                Clear List
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}


