port module TestInterop exposing (..)

import Wheel exposing (..)

import Html exposing (..)
import Html.App as Html
import Html.Events exposing (..)

import List exposing (..)
import String

main = Html.program
  {
    init = init
  , view = view
  , update = update
  , subscriptions = subscriptions
  }

type alias Model =   
  {
    wheelDataList : List WheelData,
    dataProcessedItems : List String 
  }

initialModel : Model
initialModel =
  {
    wheelDataList = [wheelData1, wheelData2, wheelData3],
    dataProcessedItems = []
  }

init : (Model, Cmd Msg)
init = ( initialModel, Cmd.none)

-- update

type Msg = 
  Change String
  | Check
  | Suggest (List String)
  
--port check : List String -> Cmd msg
port check : List (List WheelItem) -> Cmd msg

update : Msg -> Model -> (Model, Cmd Msg)
update msg model =
  case msg of 
    Change data -> 
--      (Model [data] [], Cmd.none)
      (initialModel, Cmd.none)

    Check ->
--      (model, check model.wheelItems)
--      (model, check <| wheelItemNames model.wheelItems)
      (model, check model.wheelDataList)

    Suggest newDataItems ->
      (Model [(createNewWheelStrings (headWD model.wheelDataList)
                <| createFullListFromResponses
                    (headWD model.wheelDataList) newDataItems)]
        []
        , Cmd.none)
--    (Model model.wheelItems newDataItems, Cmd.none)

-- subscriptions

port dataProcessedItems : (List String -> msg) -> Sub msg

subscriptions : Model -> Sub Msg
subscriptions model = dataProcessedItems Suggest
    
view : Model -> Html Msg
view model = div [] 
  [ 
    input [ onInput Change ] []
  , button [ onClick Check ] [ text "check"]
  , div [] [ text <| String.join ", "
--      model.dataProcessedItems
        <| map .name <| headWD model.wheelDataList
      ]
  ]
  