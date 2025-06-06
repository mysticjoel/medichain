import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

import { ASK_AI_CHAT } from "../../../Context/constants";
import {
  BsSendFill,
  FaUserAlt,
  BsRobot,
  FaRegCopy,
} from "../../ReactICON/index";

const SUGGESTED_PROMPTS = [
  "How do I book an appointment with a doctor?",
  "How are my medical records stored securely?",
  "What is the process for doctor registration?",
  "How can I view my prescription history?",
  "How does the blockchain ensure data privacy?",
];

const AI = () => {
  const notifySuccess = (msg) => toast.success(msg, { duration: 2000 });
  const notifyError = (msg) => toast.error(msg, { duration: 2000 });

  const [chatArray, setChatArray] = useState();
  const [update, setUpdate] = useState(null);
  const [prompt, setPrompt] = useState("");
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const AI_ASK_HISTORY = JSON.parse(localStorage.getItem("AI_ASK_HISTORY"));
    setChatArray(AI_ASK_HISTORY);
  }, [update]);

  const CALLING_AI = async () => {
    if (!prompt.trim()) {
      notifyError("Please enter a prompt");
      return;
    }

    try {
      setLoader(true);
      const response = await ASK_AI_CHAT(prompt);
      setPrompt("");
      setUpdate((prev) => (prev || 0) + 1);
      notifySuccess("Response received successfully");
    } catch (error) {
      notifyError(error.message || "Failed to get AI response");
      console.error(error);
    } finally {
      setLoader(false);
    }
  };

  const copyResponse = (text) => {
    navigator.clipboard.writeText(text);
    notifySuccess("Copied successfully");
  };

  const handleSuggestedPrompt = (prompt) => {
    setPrompt(prompt);
    CALLING_AI();
  };

  return (
    <div className="container-fluid">
      <div className="page-titles">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="javascript:void(0)">ASK </a>
          </li>
          <li className="breadcrumb-item active">
            <a href="javascript:void(0)">Medichain AI</a>
          </li>
        </ol>
      </div>
      {/* row */}
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div>
                  <div className="d-flex align-items-center">
                    <h4 className="card-title d-sm-none d-block">Ask AI</h4>
                  </div>

                  <div
                    style={{
                      height: "20rem",
                      width: "100%",
                      marginBottom: "1rem",
                      border: "2px solid #EDF0F1",
                      borderRadius: "5px",
                      overflowY: "auto",
                    }}
                  >
                    <div
                      className="card-body msg_card_body dz-scroll"
                      id="DZ_W_Contacts_Body3"
                    >
                      {chatArray?.map((chat, index) => (
                        <div key={index}>
                          <div className="d-flex justify-content-start mb-4">
                            <div className="img_cont_msg">
                              <p
                                style={{
                                  width: "40px",
                                }}
                              >
                                <BsRobot />
                              </p>
                            </div>
                            <div className="msg_cotainer">
                              <pre
                                style={{
                                  whiteSpace: "pre-wrap",
                                  wordWrap: "break-word",
                                }}
                              >
                                {chat?.prompt}
                              </pre>
                              <small>⏰ {chat?.timestamp}</small> &nbsp;&nbsp;
                              <FaRegCopy
                                onClick={() => copyResponse(chat?.prompt)}
                              />
                            </div>
                          </div>
                          <div className="d-flex justify-content-start mb-4">
                            <div className="img_cont_msg">
                              <p
                                style={{
                                  width: "40px",
                                }}
                              >
                                <FaUserAlt />
                              </p>
                            </div>
                            <pre
                              style={{
                                whiteSpace: "pre-wrap",
                                wordWrap: "break-word",
                              }}
                            >
                              {chat?.message}
                            </pre>
                            <small onClick={() => copyResponse(chat?.message)}>
                              <FaRegCopy />
                            </small>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="compose-content">
                    <div>
                      <div className="mb-3">
                        <textarea
                          id="email-compose-editor"
                          className="textarea_editor form-control bg-transparent"
                          rows={2}
                          placeholder="Enter prompt ..."
                          onChange={(e) => setPrompt(e.target.value)}
                          value={prompt}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-start mt-4 mb-3">
                    {loader ? (
                      <button
                        className="btn btn-primary btn-sl-sm"
                        type="button"
                      >
                        <div class="custom-loader"></div>
                      </button>
                    ) : (
                      <button
                        onClick={() => CALLING_AI(prompt)}
                        className="btn btn-primary btn-sl-sm"
                        type="button"
                        disabled={!prompt}
                      >
                        <span className="me-2">
                          <i className="fa ">
                            <BsSendFill />
                          </i>
                        </span>
                        Ask AI
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Add suggested prompts */}
      <div className="suggested-prompts mt-3">
        <h6>Suggested Questions:</h6>
        <div className="d-flex flex-wrap gap-2">
          {SUGGESTED_PROMPTS.map((suggestedPrompt, index) => (
            <button
              key={index}
              className="btn btn-sm btn-outline-primary"
              onClick={() => handleSuggestedPrompt(suggestedPrompt)}
            >
              {suggestedPrompt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AI;
