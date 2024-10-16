import {Group, Text} from "@mantine/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin, faSquareGithub, faSquareTwitter, faTelegram} from "@fortawesome/free-brands-svg-icons";
import React from "react";

const HeaderSocialLinks: React.FC = () => {
    return (
        <Group visibleFrom="md">
            <Group ml="sm" gap="md">
                <Text size="xl">
                    <a className="social-links" target="_blank" rel="noreferrer noopener"
                       href="https://github.com/IriskaIK">
                        <FontAwesomeIcon icon={faSquareGithub}/>
                    </a>
                </Text>

                <Text size="xl">
                    <a className="social-links" target="_blank" rel="noreferrer noopener"
                       href="https://x.com/_iriska_ik">
                        <FontAwesomeIcon icon={faSquareTwitter}/>
                    </a>
                </Text>

                <Text size="xl">
                    <a className="social-links" target="_blank" rel="noreferrer noopener" href="https://t.me/Iriska_IK">
                        <FontAwesomeIcon icon={faTelegram}/>
                    </a>
                </Text>

                <Text size="xl">
                    <a className="social-links" target="_blank" rel="noreferrer noopener"
                       href="https://www.linkedin.com/in/pavlo-petrychenko-a28528241/">
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </a>
                </Text>


            </Group>
        </Group>
    )
}
export default HeaderSocialLinks;