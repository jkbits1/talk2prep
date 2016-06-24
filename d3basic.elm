port module TestInterop exposing (..)

import Html exposing (..)
import Html.App as Html
import Html.Events exposing (..)

import String

main = Html.program
  {
    init = init
  , view = view
  , update = update
  , subscriptions = subscriptions
  }

-- tuple or record?
type alias WheelItem =
  {
    name : String
  , value : Int
  }

type alias WheelData = List WheelItem

wheelData : WheelData
wheelData = [
  {name = "One",    value = 15},
  {name = "Two",    value = 9},
  {name = "Three",  value = 9},
  {name = "Four",   value = 19},
  {name = "Five",   value = 12},
  {name = "Six",    value = 14},
  {name = "Seven",  value = 21},
  {name = "Eight",  value = 18},
  {name = "Nine",   value = 8}
  ]

wheelItemNames : List String
wheelItemNames = List.map .name wheelData

type alias Model =   
  {
    wheelItems : List WheelItem,
    dataProcessedItems : List String 
  }

initialModel : Model
initialModel = {wheelItems = wheelData, dataProcessedItems = [] }

init : (Model, Cmd Msg)
init = ( initialModel, Cmd.none)

-- update

type Msg = 
  Change String
  | Check
  | Suggest (List String)
  
port check : List String -> Cmd msg

update : Msg -> Model -> (Model, Cmd Msg)
update msg model =
  case msg of 
    Change data -> 
--      (Model [data] [], Cmd.none)
      (initialModel, Cmd.none)

    Check ->
--      (model, check model.wheelItems)
      (model, check wheelItemNames)

    Suggest newDataItems ->
--      (Model model.wheelItems newDataItems, Cmd.none)
      (initialModel, Cmd.none)

-- subscriptions

port dataProcessedItems : (List String -> msg) -> Sub msg

subscriptions : Model -> Sub Msg
subscriptions model = dataProcessedItems Suggest
    
view : Model -> Html Msg
view model = div [] 
  [ 
    input [ onInput Change ] []
  , button [ onClick Check ] [ text "check"]
  , div [] [ text <| String.join ", " model.dataProcessedItems ]
  ]
  