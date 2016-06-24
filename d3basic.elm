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

type alias Model =   
  {
    wheelItems : List String,
    dataProcessedItems : List String 
  }


init : (Model, Cmd Msg)
init = (Model ["1","2","3","4","5","6","7","8"] [], Cmd.none)

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
      (Model [data] [], Cmd.none)
      
    Check ->
      (model, check model.wheelItems)
      
    Suggest newDataItems ->
      (Model model.wheelItems newDataItems,
        Cmd.none)
        
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
  