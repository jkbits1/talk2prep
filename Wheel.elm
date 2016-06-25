module Wheel exposing (..)

import List exposing (..)

-- tuple or record?
type alias WheelItem =
  {
    name : String
  , value : Int
  , sz : Int
  }

type alias WheelData = List WheelItem

wheelData1 : WheelData
wheelData1 = [
--  {name = "One",    value = 15},
--  {name = "Two",    value = 9},
--  {name = "Three",  value = 9},
--  {name = "Four",   value = 19},
--  {name = "Five",   value = 12},
--  {name = "Six",    value = 14},
--  {name = "Seven",  value = 21},
--  {name = "Eight",  value = 18},
--  {name = "Nine",   value = 8}
--  {name = "One",    value = 15, sz = 8},
--  {name = "Two",    value = 9, sz = 8},
--  {name = "Three",  value = 9, sz = 8},
--  {name = "Four",   value = 19, sz = 8},
--  {name = "Five",   value = 12, sz = 8},
--  {name = "Six",    value = 14, sz = 8},
--  {name = "Seven",  value = 21, sz = 8},
--  {name = "Eight",  value = 18, sz = 8},
--  {name = "Nine",   value = 8, sz = 8}
  {name = "1",    value = 15, sz = 8},
  {name = "2",    value = 9, sz = 8},
  {name = "3",  value = 9, sz = 8},
  {name = "4",   value = 19, sz = 8},
  {name = "5",   value = 12, sz = 8},
  {name = "6",    value = 14, sz = 8},
  {name = "7",  value = 21, sz = 8},
  {name = "8",  value = 18, sz = 8},
  {name = "9",   value = 8, sz = 8}
  ]

wheelData2 : WheelData
wheelData2 = [
--  {name = "OneX",    value = 15, sz = 6},
--  {name = "TwoX",    value = 9, sz = 6},
--  {name = "ThreeX",  value = 9, sz = 6},
--  {name = "FourX",   value = 19, sz = 6},
--  {name = "FiveX",   value = 12, sz = 6},
--  {name = "SixX",    value = 14, sz = 6},
--  {name = "SevenX",  value = 21, sz = 6},
--  {name = "EightX",  value = 18, sz = 6},
--  {name = "NineX",   value = 8, sz = 6}
  {name = "1x",    value = 15, sz = 6},
  {name = "2x",    value = 9, sz = 6},
  {name = "3x",  value = 9, sz = 6},
  {name = "4x",   value = 19, sz = 6},
  {name = "5x",   value = 12, sz = 6},
  {name = "6x",    value = 14, sz = 6},
  {name = "7x",  value = 21, sz = 6},
  {name = "8x",  value = 18, sz = 6},
  {name = "9x",   value = 8, sz = 6}
  ]

wheelData3 : WheelData
wheelData3 = [
--  {name = "OneX",    value = 15, sz = 6},
--  {name = "TwoX",    value = 9, sz = 6},
--  {name = "ThreeX",  value = 9, sz = 6},
--  {name = "FourX",   value = 19, sz = 6},
--  {name = "FiveX",   value = 12, sz = 6},
--  {name = "SixX",    value = 14, sz = 6},
--  {name = "SevenX",  value = 21, sz = 6},
--  {name = "EightX",  value = 18, sz = 6},
--  {name = "NineX",   value = 8, sz = 6}
  {name = "1-",    value = 15, sz = 4},
  {name = "2-",    value = 9, sz = 4},
  {name = "3-",  value = 9, sz = 4},
  {name = "4-",   value = 19, sz = 4},
  {name = "5-",   value = 12, sz = 4},
  {name = "6-",    value = 14, sz = 4},
  {name = "7-",  value = 21, sz = 4},
  {name = "8-",  value = 18, sz = 4},
  {name = "9-",   value = 8, sz = 4}
  ]

wheelItemNames : List WheelItem -> List String
wheelItemNames ws = map .name ws

nth idx xs = Maybe.withDefault "" <| head <| drop idx xs
nthData idx xs =
  Maybe.withDefault { name = "Test", value = 1, sz = 1 } <| head <| drop idx xs

headWD : List WheelData -> WheelData
headWD wds =
  Maybe.withDefault [{ name = "Test", value = 1, sz = 1 }] <| head wds

--responses = ["X"]

getResponseOrDefault : List String -> WheelData -> Int ->  String
getResponseOrDefault resp data idx =
  if idx < length resp then
    nth idx resp
  else
    .name <| nthData idx data

createFullListFromResponses : WheelData -> List String -> List String
createFullListFromResponses ws rs =
  List.map
    (getResponseOrDefault rs ws)
    [0..(List.length ws)]

createNewWheelStrings : WheelData -> List String -> WheelData
createNewWheelStrings ws ns =
  map2 (\a b -> { name = a, value = .value b, sz = .sz b }) ns ws
